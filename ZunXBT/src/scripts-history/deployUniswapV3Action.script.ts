import { DeployUniswapV3Action, type actions } from '@infinit-xyz/uniswap-v3/actions'
import type { z } from 'zod'

type Param = z.infer<typeof actions['init']['paramsSchema']>

// TODO: Replace with actual params
const params: Param = {
  // Native currency label (e.g., ETH)
  "nativeCurrencyLabel": 'ETH',

  // Address of the owner of the proxy admin
  "proxyAdminOwner": '0xbb73238afb49c22f7ed9de8857572e9a79795965',

  // Address of the owner of factory
  "factoryOwner": '0xbb73238afb49c22f7ed9de8857572e9a79795965',

  // Address of the wrapped native token (e.g., WETH)
  "wrappedNativeToken": '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
}

// Signer configuration
const signer = {
  "deployer": "anondp"
}

export default { params, signer, Action: DeployUniswapV3Action }
