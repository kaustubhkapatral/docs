# Access An Agent

This document assumes that you have already deployed the Agent and it is running. Refer to this [Deploy Agent](/ai-builders/deploy-an-agent) to learn how to deploy an Agent.

Once the Agent is deployed and running, you can interact with it in one of the following ways:

- **Through On-Chain Requests:** You need to submit each request to the network. The Agent will pick up these requests and update the results back to the chain. This interaction operates on a per-request cost basis.
- **Through Subscription:** This allows you to interact with the Agent via a one-time subscription.

## Onchain Requests

The user must submit an inference request transaction to the network by paying the appropriate inference fee. Once the result is computed, the Agent submits the result back to the network, allowing the user to query it later.

Run the following command to submit an inference request to the network:

``` bash
arkad tx deployment submit-inference [deployment-id] [request] --from sender
```

Example:

``` bash
arkad tx deployment submit-inference 2 '{"request":"Explain Arka network"}' --from sender
```

Run this command to query inference request details:

``` bash
arkad q deployment inference <inference-id>
```


## Subscription

If the Agent deployment includes subscription plans, the user can subscribe to a plan to directly interact with the Agent without the need to submit a transaction for each request.

### Purchasing plan

Run this command to query if there are any plans available for the deployed Agent.

``` bash
arkad query subscription plan-by-deployment [deployment-id]
```

If plan is exist for the deployed Agent. You can subscribe to it using following command

``` bash
arkad tx subscription buy-plan [plan-id] [metadata] [creator] --from sender
```

Example:

``` bash
arkad tx subscription buy-plan 2 '{}' <plan-creator-address> --from sender
```

Once plan purchased successfully. You can query subscription details with following command

``` bash
arkad q subscription purchased-plan <plan-id> <buyer-address>
```

### Creating nonce

Once the plan is purchased, you can create a nonce that grants other accounts permission to interact with the Agent. You can also set an expiration time. Once the nonce expires, the account will no longer be able to interact with the Agent.

Run the following command to grant access permission to other accounts:

``` bash
arkad tx subscription create-nonce [plan-id] [expiration] [grantee] --from sender
```

After the nonce is created, the specified account will be able to interact with the Agent.
