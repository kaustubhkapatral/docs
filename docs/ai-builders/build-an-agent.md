# Build An Agent


This documentation provides a detailed guide on how to register an Agent with the Arka Network and manage its versions. You can achieve this in one of the following ways:
- Using the Arka Node and IPFS
- Using Arka Playground

## Using Arka Node and IPFS

### Creating Repository

Before uploading an Agent, you must create a repository on the Arka network. A repository functions as a Git version control system, where each repository can contain multiple versions of an Agent's code.

Run the following command to create a new repository:

``` bash
arkad tx storage create-repository [name] [description] [image-url] [repository-type] [is-private] [metadata] [tags] [inference_metadata] --from sender
```

Example:

``` bash
arkad tx storage create-repository Sentiment-Analysis "sentiment analysis python rest application" "https://example.com/image.png" REPOSITORY_TYPE_IPFS true "{}" "ML,AI" "{}" --from sender
```
Once the repository is successfully created, you can query it using the following command:

``` bash
arkad q storage repositories --address <creator-address>
```

This command will list all repositories associated with the specified account address.

### Creating Version

#### Uploading Agent code

After successfully creating a repository, it's time to write and upload the Agent code.

Once your application (Agent) is ready, you must upload the source code to the Arka network's IPFS server before registering the Agent on the Arka network.

Use the following command to upload your code to the IPFS network:


``` bash
ipfs --api /ip4/127.0.0.1/tcp/5001 add -r --hidden <path-to-application-folder>
```

Note: In the command, 127.0.0.1 and 5001 refer to the IPFS network gateway address. Ensure these values are correct for your setup.

This command will return an IPFS CID. Copy the root directory CID, as it will be required for registering the code on the Arka network.

#### Registering Agent Version

Once the Agent code is uploaded to the IPFS network, it’s time to register it on the Arka network.

Run the following command to register Agent version:

``` bash
arkad tx storage create-version [repository-id] [commit_message] [cid] [url-info] --from sender
```

Example:

``` bash
arkad tx storage create-version 1 "commit message" QmfSDqkvzEznmiLzZ7TExv4VpiDEQGr9nBtK2MFPT6kQ4i '{}' --from sender
```

Once the version is successfully registered, you can query it using the following command:

``` bash
arkad q storage versions --repository_id 1
```

This command will list all the versions registered with the specified repository.

## Using Arka Playground

Visit [Playground](https://studio.arka.network), This will open the Playground website, where you can manage your Agent versions with ease.

**Steps:**

- Connect your wallet and ensure you have enough Arka tokens.
- Now goto `Hub` section. If the repository does not already exist, click on `Create Repository`.
- A form will open. Provide all the necessary details, including the repository name, description, image URL, 
repository type, privacy settings, metadata, and tags. Submit the form to create your repository.
- Now navigate to `Launch Notebook` page.
- Choose the necessary hardware specifications (e.g., CPU, GPU, RAM, storage) for your Jupyter Notebook environment.
- Click on `Deploy`: This will initiate a deployment request for the Jupyter Notebook environment..
- Allow some time for resource providers on the Arka network to pick up your deployment request.
- Once the environment is deployed successfully, you will receive an access URL and a notebook secret. Use these to access your Jupyter Notebook environment.
- Begin developing your Agent within the deployed Jupyter Notebook environment.
- Once your Agent code is complete, navigate to the Signing Notebook. This notebook contains detailed instructions and steps for:
  - Uploading the Agent code to IPFS
  - Registering on the Arka Network