/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  L2ArbitrumGovernor,
  L2ArbitrumGovernor_Initialized,
  L2ArbitrumGovernor_LateQuorumVoteExtensionSet,
  L2ArbitrumGovernor_OwnershipTransferred,
  L2ArbitrumGovernor_ProposalCanceled,
  L2ArbitrumGovernor_ProposalCreated,
  L2ArbitrumGovernor_ProposalExecuted,
  L2ArbitrumGovernor_ProposalExtended,
  L2ArbitrumGovernor_ProposalQueued,
  L2ArbitrumGovernor_ProposalThresholdSet,
  L2ArbitrumGovernor_QuorumNumeratorUpdated,
  L2ArbitrumGovernor_TimelockChange,
  L2ArbitrumGovernor_VoteCast,
  L2ArbitrumGovernor_VoteCastWithParams,
  L2ArbitrumGovernor_VotingDelaySet,
  L2ArbitrumGovernor_VotingPeriodSet,
} from "generated";

L2ArbitrumGovernor.Initialized.handler(async ({ event, context }) => {
  const entity: L2ArbitrumGovernor_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.L2ArbitrumGovernor_Initialized.set(entity);
});

L2ArbitrumGovernor.LateQuorumVoteExtensionSet.handler(async ({ event, context }) => {
  const entity: L2ArbitrumGovernor_LateQuorumVoteExtensionSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldVoteExtension: event.params.oldVoteExtension,
    newVoteExtension: event.params.newVoteExtension,
  };

  context.L2ArbitrumGovernor_LateQuorumVoteExtensionSet.set(entity);
});

L2ArbitrumGovernor.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: L2ArbitrumGovernor_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.L2ArbitrumGovernor_OwnershipTransferred.set(entity);
});

L2ArbitrumGovernor.ProposalCanceled.handler(async ({ event, context }) => {
  const entity: L2ArbitrumGovernor_ProposalCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
  };

  context.L2ArbitrumGovernor_ProposalCanceled.set(entity);
});

L2ArbitrumGovernor.ProposalCreated.handler(async ({ event, context }) => {
  const entity: L2ArbitrumGovernor_ProposalCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
    proposer: event.params.proposer,
    targets: event.params.targets,
    values: event.params.values,
    signatures: event.params.signatures,
    calldatas: event.params.calldatas,
    startBlock: event.params.startBlock,
    endBlock: event.params.endBlock,
    description: event.params.description,
  };

  context.L2ArbitrumGovernor_ProposalCreated.set(entity);
});

L2ArbitrumGovernor.ProposalExecuted.handler(async ({ event, context }) => {
  const entity: L2ArbitrumGovernor_ProposalExecuted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
  };

  context.L2ArbitrumGovernor_ProposalExecuted.set(entity);
});

L2ArbitrumGovernor.ProposalExtended.handler(async ({ event, context }) => {
  const entity: L2ArbitrumGovernor_ProposalExtended = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
    extendedDeadline: event.params.extendedDeadline,
  };

  context.L2ArbitrumGovernor_ProposalExtended.set(entity);
});

L2ArbitrumGovernor.ProposalQueued.handler(async ({ event, context }) => {
  const entity: L2ArbitrumGovernor_ProposalQueued = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
    eta: event.params.eta,
  };

  context.L2ArbitrumGovernor_ProposalQueued.set(entity);
});

L2ArbitrumGovernor.ProposalThresholdSet.handler(async ({ event, context }) => {
  const entity: L2ArbitrumGovernor_ProposalThresholdSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldProposalThreshold: event.params.oldProposalThreshold,
    newProposalThreshold: event.params.newProposalThreshold,
  };

  context.L2ArbitrumGovernor_ProposalThresholdSet.set(entity);
});

L2ArbitrumGovernor.QuorumNumeratorUpdated.handler(async ({ event, context }) => {
  const entity: L2ArbitrumGovernor_QuorumNumeratorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldQuorumNumerator: event.params.oldQuorumNumerator,
    newQuorumNumerator: event.params.newQuorumNumerator,
  };

  context.L2ArbitrumGovernor_QuorumNumeratorUpdated.set(entity);
});

L2ArbitrumGovernor.TimelockChange.handler(async ({ event, context }) => {
  const entity: L2ArbitrumGovernor_TimelockChange = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldTimelock: event.params.oldTimelock,
    newTimelock: event.params.newTimelock,
  };

  context.L2ArbitrumGovernor_TimelockChange.set(entity);
});

L2ArbitrumGovernor.VoteCast.handler(async ({ event, context }) => {
  const entity: L2ArbitrumGovernor_VoteCast = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    voter: event.params.voter,
    proposalId: event.params.proposalId,
    support: event.params.support,
    weight: event.params.weight,
    reason: event.params.reason,
  };

  context.L2ArbitrumGovernor_VoteCast.set(entity);
});

L2ArbitrumGovernor.VoteCastWithParams.handler(async ({ event, context }) => {
  const entity: L2ArbitrumGovernor_VoteCastWithParams = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    voter: event.params.voter,
    proposalId: event.params.proposalId,
    support: event.params.support,
    weight: event.params.weight,
    reason: event.params.reason,
    params: event.params.params,
  };

  context.L2ArbitrumGovernor_VoteCastWithParams.set(entity);
});

L2ArbitrumGovernor.VotingDelaySet.handler(async ({ event, context }) => {
  const entity: L2ArbitrumGovernor_VotingDelaySet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldVotingDelay: event.params.oldVotingDelay,
    newVotingDelay: event.params.newVotingDelay,
  };

  context.L2ArbitrumGovernor_VotingDelaySet.set(entity);
});

L2ArbitrumGovernor.VotingPeriodSet.handler(async ({ event, context }) => {
  const entity: L2ArbitrumGovernor_VotingPeriodSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldVotingPeriod: event.params.oldVotingPeriod,
    newVotingPeriod: event.params.newVotingPeriod,
  };

  context.L2ArbitrumGovernor_VotingPeriodSet.set(entity);
});
