# Deploy An Agent

Before deploying an Agent on the Arka network, you must have the Agent code registered on the network. Follow the
[Build An Agent](/ai-builders/build-an-agent) instructions to learn how to build and register an Agent on the Arka network.

You can submit an Agent deployment request in one of the following ways:
- Using Arka node binary
- Using Arka Playground

## Using Arka node binary

You can download the Arka network binary from [Arka Network](https://github.com/arka-labs/arka-network.git). Once you have the binary and have uploaded the Agent to the network, you can submit a deployment request with the following command:

``` bash
arkad tx deployment create-deployment [name] [escrow-amount] [deployment-type] [deployment-environment] [metadata] [resource-metadata] --repository-id 2 --version-id 2 --from sender
```

Example:

``` bash
arkad tx deployment create-deployment "Agent1" 100000uarka DEPLOYMENT_TYPE_AGENT DEPLOYMENT_ENVIRONMENT_AKASH '{"port":8080}' '{"cpu":2,"ram":4,"storage":150}' --repository-id 2 --version-id 2 --from sender
```

This command will create an Agent deployment request. Now, wait for some time for the resource provider to pick up and deploy the Agent.

You can query the deployment information with following command:

``` bash 
arkad q deployment deployment <deployment-id>
```

## Using Arka Playground

Visit [Playground](https://studio.arka.network), This will open the Playground website, where you can deploy Agents.

**Steps:**
- Connect your wallet and ensure you have enough Arka tokens.
- Goto `Hub` section. Select the repository you want to deploy.
- Select the version you want to deploy from the versions popup.
- Click the `Deploy` button to open the resource selection page.
- Choose the appropriate hardware resources, then click the `Deploy` button.
- This will submit an Agent deployment request.
- Wait for some time for resource providers to pick up and deploy the Agent.
- You can track your Agent's status on the `My Agents` page.