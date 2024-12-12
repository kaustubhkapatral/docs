# Run A Node

## Initial Setup

### Hardware

We recommend the following hardware specifications:

- 16G RAM
- 4vCPUs
- 500GB Disk space

### Setup Instructions

We recommend using Ubuntu 22.04 or 24.04. The following setup instructions are assuming you are using one of these images and the setup may be different if not.

### Install Dependencies

Update packages:

``` bash
sudo apt update
```

Install tools:

``` bash
sudo apt install git build-essential wget jq -y
```

### Install Go

Download Go:


``` bash
wget https://dl.google.com/go/go1.23.0.linux-amd64.tar.gz
```

Verify data integrity:

``` bash
sha256sum go1.23.0.linux-amd64.tar.gz
```

Verify SHA-256 hash:

``` bash
9df122d6baf6f2275270306b92af3b09d7973fb1259257e284dba33c0db14f1b
```

Unpack Go download:

``` bash
sudo tar -C /usr/local -xzf go1.22.0.linux-amd64.tar.gz
```

Set up environment:


``` bash
echo '
export GOPATH=$HOME/go
export GOROOT=/usr/local/go
export GOBIN=$GOPATH/bin
export PATH=$PATH:/usr/local/go/bin:$GOBIN' >> ~/.profile
```

Source profile file:

``` bash
. ~/.profile
```

## Install Arka

The following instructions are for building and installing the `arkad` binary.

### Installation

Clone the `arka-network` repository:

``` bash
git clone https://github.com/arka-labs/arka-network.git
```

Change to the `arka-network` directory:

``` bash
cd arka-network
```

Check out the latest version:

``` bash
git checkout main
```

Build and install the `arkad` binary:

``` bash
make install
```

Check to make sure the installation was successful:

``` bash
arkad -h
```

You should see the following:


``` bash
Arka application
....
....
```

## Initialize Node

### Create Accounts

In this section, you will create two test accounts. You will name the first account `validator` and the second account `delegator`. You will create both accounts using the `test` backend, meaning both accounts will not be securely stored and should not be used in a production environment. When using the `test` backend, accounts are stored in the home directory.

Create `validator` account:

``` bash
arkad keys add validator --keyring-backend test
```

Create `delegator` account:

``` bash
arkad keys add delegator --keyring-backend test
```

### Initialize Node

Initializing the node will create the `config` and `data` and `wasm` directories within the home directory. The `config` directory is where configuration files for the node are stored and the `data` directory is where the data for the blockchain is stored and `wasm` directory is where cosmwasm contracts data is stored. The default home directory is `~/.arkaapp`.


Initialize the node:

``` bash
arkad init validator --chain-id arka-local
```

In this case, `validator` is the name (or "moniker") of the node and `arka-local` is the chain ID. Feel free to change these values but make sure to use the same value for chain-id in the following steps.

### Update Genesis

When the node was initialized, a `genesis.json` file was created within the `config` directory. In this section, you will be adding two genesis accounts (accounts with an initial token balance) and a genesis transaction (a transaction that registers the validator account in the validator set).

Update native staking token to `uarka`:

``` bash
sed -i "s/stake/uarka/g" ~/.arkaapp/config/genesis.json
```

- Add `validator` account to `genesis.json`:

``` bash
arkad genesis add-genesis-account validator 1000000000000uarka  --keyring-backend test
```

- Add `delegator` account to `genesis.json`:

``` bash
arkad genesis add-genesis-account delegator 1000000000000uarka  --keyring-backend test
```

- Create genesis transaction:

``` bash
arkad genesis gentx validator 90000000000uarka --chain-id arka-local --keyring-backend test
```

- Add genesis transaction to `genesis.json`:

``` bash
arkad genesis collect-gentxs
```

Now that you have updated the `genesis.json` file, you are ready to start the node. Starting a node with a new genesis file will create a new blockchain.

### Start node

``` bash
arkad start --minimum-gas-prices 0uarka
```