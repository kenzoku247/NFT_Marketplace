import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import web3Modal from "web3modal";
import { ethers } from "ethers";
import Router from "next/router";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";

import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants";

// const projectId = process.env.API_KEY_IPFS;
const projectId = "2Q6ZwKwFoarZwGDwVKrhvk2VZDc";
// const projectSecretKey = process.env.API_KEY_SECRET_IPFS;
const projectSecretKey = "3f668bd9883bfe722b430e50256f084c";
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
  "base64"
)}`;

const subDomain = "kma-nft-marketplace.infura-ipfs.io";

const client = ipfsHttpClient({
  host: "infura-ipfs.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
  );

const connectingWithSmartContract = async () => {
  try {
    const webModal = new web3Modal();
    const connection = await webModal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract");
    // console.log(error);
  }
};

export const NFTMarketplaceContext = React.createContext();
export const NFTMarketplaceProvider = ({ children }) => {
  const titleData = "Discover, collect, and sell NFTs";

  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const router = useRouter();
  const [accountBalance, setAccountBalance] = useState();

  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) return console.log("Install Metamask");
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No account found");
      }
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const getBalance = await provider.getBalance(accounts[0]);
      const bal = ethers.utils.formatEther(getBalance);
      setAccountBalance(bal);
    } catch (error) {
      console.log("Something wrong went connecting");
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install Metamask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      // window.location.reload();
    } catch (error) {
      console.log("Error while connecting to wallet");
    }
  };

  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({ content: file });
      const url = `https://${subDomain}/ipfs/${added.path}`;
      return url;
    } catch (error) {
      console.log("Error while uploading to IPFS");
      console.log(error);
    }
  };

  const createNFT = async (name, price, image, description, router) => {
    if (!name || !description || !price || !image)
      return console.log("Data is missing");

    const data = JSON.stringify({ name, description, image });
    try {
      const added = await client.add(data);

      const url = `https://infura-ipfs.io/ipfs/${added.path}`;

      await createSale(url, price);
      router.push("/search");
    } catch (error) {
      console.log(error);
    }
  };

  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.utils.parseUnits(formInputPrice, "ether");
      const contract = await connectingWithSmartContract();

      const listingPrice = await contract.getListingPrice();

      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.resellToken(id, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
      // router.push("/search");
    } catch (error) {
      console.log("Error while creating sale");
      console.log(error);
    }
  };

  const fetchNFTs = async () => {
    try {
      if (currentAccount) {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const data = await contract.fetchMarketItems();

        // console.log(data);
        const items = await Promise.all(
          data.map(
            async ({ tokenId, seller, owner, price: unformattedPrice }) => {
              const tokenURI = await contract.tokenURI(tokenId);
              // console.log(tokenURI);
              const {
                data: { image, name, description },
              } = await axios.get(tokenURI);

              const price = ethers.utils.formatUnits(
                unformattedPrice.toString(),
                "ether"
              );

              return {
                price,
                tokenId: tokenId.toNumber(),
                seller,
                owner,
                image,
                name,
                description,
                tokenURI,
              };
            }
          )
        );
        // console.log(items);
        return items;
      }
    } catch (error) {
      console.log("Error while fetching NFTs");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNFTs();
  }, []);

  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {
      if (currentAccount) {
        const contract = await connectingWithSmartContract();
        const data =
          type == "fetchItemListed"
            ? await contract.fetchItemsListed()
            : await contract.fetchMyNFTs();

        const items = await Promise.all(
          data.map(
            async ({ tokenId, seller, owner, price: unformattedPrice }) => {
              const tokenURI = await contract.tokenURI(tokenId);
              const {
                data: { image, name, description },
              } = await axios.get(tokenURI);
              const price = ethers.utils.formatUnits(
                unformattedPrice.toString(),
                "ether"
              );
              return {
                price,
                tokenId: tokenId.toNumber(),
                seller,
                owner,
                description,
                image,
                name,
                tokenURI,
              };
            }
          )
        );

        return items;
      }
    } catch (error) {
      console.log("Error while fetching listed NFTs");
    }
  };

  useEffect(() => {
    fetchMyNFTsOrListedNFTs();
  }, []);

  const buyNFT = async (nft) => {
    try {
      const contract = await connectingWithSmartContract();
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });

      await transaction.wait();
      router.push("/author");
    } catch (error) {
      console.log("Error while buy NFT");
    }
  };

  const [transactionCount, setTransactionCount] = useState("");
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(false);
  //---FETCHING SMART CONTRACT
  const fetchTransferContract = (signerOrProvider) =>
    new ethers.Contract(
      TransferFundsAddress,
      TransferFundsABI,
      signerOrProvider
    );

  //---CONNECTING WITH TRANSFER SMART CONTRACT

  const connectingTransferContract = async () => {
    try {
      const web3Modal = new Wenb3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchTransferContract(signer);
      return contract;
    } catch (error) {
      console.log("Something went wrong while connecting with contract");
    }
  };

  const transferEther = async (address, ether, message) => {
    try {
      if (currentAccount) {
        const contract = await connectingTransferContract();
        const unFormatedAmount = ethers.utils.parseEther(ether);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: currentAccount,
              to: address,
              // gas: "0x5208",
              value: unFormatedAmount._hex,
            },
          ],
        });
        const transaction = await contract.addToBlockchain(
          address,
          unFormatedAmount,
          message
        );

        setLoading(true);
        transaction.wait();
        console.log(transaction);
        setLoading(false);

        const transactionsCount = await contract.getTransactionCount();
        setTransactionCount(transactionsCount.toNumber());
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const contract = await connectingTransferContract();

        const availableTransactions = await contract.getAllTransactions();

        const structuredTransactions = availableTransactions.map(
          (transaction) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(
              transaction.timestamp.toNumber() * 1000
            ).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount._hex) / 10 ** 18,
          })
        );


        setTransaction(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NFTMarketplaceContext.Provider
      value={{
        checkIfWalletConnected,
        connectWallet,
        uploadToIPFS,
        createNFT,
        fetchNFTs,
        fetchMyNFTsOrListedNFTs,
        buyNFT,
        createSale,
        currentAccount,
        titleData,
        setOpenError,
        openError,
        error,
        transferEther,
        accountBalance,
        getAllTransactions,
        transaction,
        loading,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
