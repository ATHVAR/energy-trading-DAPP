
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "./math.sol";

contract Exchange {
    // Define the Bid and Ask structs
    struct Bid {
        address owner; // address of the bidder
        uint256 price; // price per unit of the asset
        uint256 amount; // amount of the asset
        uint256 date; // date of the bid
    }

    struct Ask {
        address owner; // address of the seller
        uint256 price; // price per unit of the asset
        uint256 amount; // amount of the asset
        uint256 date; // date of the ask
    }

    Bid[] public Bids; // what buyers are willing to pay
    Ask[] public Asks; // what sellers are willing to take for it
    
    // Define the BidRemoved, AskPlaced, and AskRemoved events
    event BidRemoved(address indexed owner, uint256 price, uint256 amount, uint256 date);
    event AskPlaced(address indexed owner, uint256 price, uint256 amount, uint256 date);
    event AskRemoved(address indexed owner, uint256 price, uint256 amount, uint256 date);

    // Define the getBid function
    function getBid(uint256 index) public view returns (address, uint256, uint256, uint256) {
        return (
            Bids[index].owner,
            Bids[index].price,
            Bids[index].amount,
            Bids[index].date
        );
    }
  // Define the getAsk function
    function getAsk(uint256 index) public view returns (address, uint256, uint256, uint256) {
        return (
            Asks[index].owner,
            Asks[index].price,
            Asks[index].amount,
            Asks[index].date
        );
    }
// Define the placeBid function
    function placeBid(uint256 _price, uint256 _amount, uint256 timestamp) public returns (bool) {
        for (uint256 i = 0; i < Asks.length; i++) {
            if (Asks[i].price == _price && Asks[i].date == timestamp) {
                // Match found, execute trade
                uint256 amount = Math.min(_amount, Asks[i].amount);//t ensures that the trade amount does not exceed the smaller of the remaining bid amount or the available amount in the ask.
                Asks[i].amount -= amount;
                _amount -= amount;
                if (Asks[i].amount == 0) {
                    emit BidRemoved(Asks[i].owner, Asks[i].price, Asks[i].amount, Asks[i].date);
                    removeAsk(i);
                }
                if (_amount == 0) {
                    // Transfer funds from buyer to seller
                payable(Asks[i].owner).transfer(amount * _price);
                    return true;
                }
            }
        }
        Bid memory b;
        b.owner = msg.sender;
        b.price = _price;
        b.amount = _amount;
        b.date = timestamp;
        Bids.push(b);
        return true;
    }

    function placeAsk(uint256 _price, uint256 _amount, uint256 timestamp) public returns (bool) {
        for (uint256 i = 0; i < Bids.length; i++) {
            if (Bids[i].price == _price && Bids[i].date == timestamp) {
                // Match found, execute trade
                uint256 amount = Math.min(_amount, Bids[i].amount);
                Bids[i].amount -= amount;
                _amount -= amount;
                if (Bids[i].amount == 0) {
                    emit BidRemoved(Bids[i].owner, Bids[i].price, Bids[i].amount, Bids[i].date);
                    removeBid(i);
                }
                if (_amount == 0) {
                    // Transfer funds from buyer to seller
                payable(Bids[i].owner).transfer(amount * _price);
                    return true;
                }
            }
        }
        Ask memory a;
        a.owner = msg.sender;
        a.price = _price;
        a.amount = _amount;
        a.date = timestamp;
        Asks.push(a);
        emit AskPlaced(msg.sender, _price, _amount, timestamp);
        return true;
    }
// Define the removeBid function
    function removeBid(uint256 index) public returns (uint256) {
        if (index >= Bids.length) return Bids.length;
        emit BidRemoved(Bids[index].owner, Bids[index].price, Bids[index].amount, Bids[index].date);
        Bids[index] = Bids[Bids.length - 1];
        Bids.pop();// Remove the bid from the Bids array
        return Bids.length;
    }
// Define the removeAsk function
    function removeAsk(uint256 index) public returns (uint256) {
        if (index >= Asks.length) return Asks.length;
        emit AskRemoved(Asks[index].owner, Asks[index].price, Asks[index].amount, Asks[index].date);
        Asks[index] = Asks[Asks.length - 1];//replaces the ask at the specified index with the last ask in the Asks array.
        Asks.pop();// Remove the ask from the Asks array
        return Asks.length;
    }

   // Define the getBidsCount function
function getBidsCount() public view returns (uint256) {
    return Bids.length;
}

// Define the getAsksCount function
function getAsksCount() public view returns (uint256) {
    return Asks.length;
}

// Define the clearMarket function
function clearMarket() public {
    delete Bids; // delete all bids
    delete Asks; // delete all asks
}

}

