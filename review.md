# Code review: `noa/refund` (calcRefund)

**Verdict: changes requested. Do not merge yet.**

## What I ran
`node tests/run.js` on `noa/refund` → **3 passed, 4 failed**.

## Findings

### 1. Bug: the service fee is refunded (refund tests fail)
`js/refund.js` computes:

```js
qty * (TICKET_PRICE + SERVICE_FEE) * REFUND_RATE
```

The comment and the spec say the customer gets back 90% of the **ticket price**
and the **service fee is not refunded**. The fee is included in the formula,
so we over-refund 10.80 NIS per ticket:

| qty | expected | actual |
|-----|----------|--------|
| 1 | 315 | 325.8 |
| 2 | 630 | 651.6 |

**Fix:** `return qty * TICKET_PRICE * REFUND_RATE;`

"It works on my machine" isn't the case here. Noa's own tests in
`tests/refund.test.js` fail on her branch.

### 2. Unrelated failures: `format.test.js` (not Noa's fault)
The two `formatPrice` failures (0.00 NIS) come from `main` before the price
hotfix (revert of `perf: faster price formatting`). The branch was created before
that fix. After fixing #1, please merge/rebase onto the current `main` so the
full suite is green.

### 3. Minor suggestions
- Validate `qty` (integer ≥ 1) as `calcTotal` does, or document the assumption.
- Consider rounding to agorot (2 decimals) to avoid floating-point surprises
  in money values.
- Once early access and the student promo land, decide whether refunds use
  the **discounted** price the customer actually paid rather than `TICKET_PRICE`.

## Summary
Good, small, readable change with tests. Please fix the formula (#1),
bring in the latest `main` (#2), and re-run `node tests/run.js` before merging.
