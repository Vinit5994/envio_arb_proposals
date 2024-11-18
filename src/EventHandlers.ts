/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  TransparentUpgradeableProxy,
  TransparentUpgradeableProxy_AdminChanged,
  TransparentUpgradeableProxy_BeaconUpgraded,
  TransparentUpgradeableProxy_Initialized,
  TransparentUpgradeableProxy_LateQuorumVoteExtensionSet,
  TransparentUpgradeableProxy_OwnershipTransferred,
  TransparentUpgradeableProxy_ProposalCanceled,
  TransparentUpgradeableProxy_ProposalCreated,
  TransparentUpgradeableProxy_ProposalExecuted,
  TransparentUpgradeableProxy_ProposalExtended,
  TransparentUpgradeableProxy_ProposalQueued,
  TransparentUpgradeableProxy_ProposalThresholdSet,
  TransparentUpgradeableProxy_QuorumNumeratorUpdated,
  TransparentUpgradeableProxy_TimelockChange,
  TransparentUpgradeableProxy_Upgraded,
  TransparentUpgradeableProxy_VoteCast,
  TransparentUpgradeableProxy_VoteCastWithParams,
  TransparentUpgradeableProxy_VotingDelaySet,
  TransparentUpgradeableProxy_VotingPeriodSet,
} from "generated";

TransparentUpgradeableProxy.AdminChanged.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_AdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousAdmin: event.params.previousAdmin,
    newAdmin: event.params.newAdmin,
  };

  context.TransparentUpgradeableProxy_AdminChanged.set(entity);
});

TransparentUpgradeableProxy.BeaconUpgraded.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_BeaconUpgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    beacon: event.params.beacon,
  };

  context.TransparentUpgradeableProxy_BeaconUpgraded.set(entity);
});

TransparentUpgradeableProxy.Initialized.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.TransparentUpgradeableProxy_Initialized.set(entity);
});

TransparentUpgradeableProxy.LateQuorumVoteExtensionSet.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_LateQuorumVoteExtensionSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldVoteExtension: event.params.oldVoteExtension,
    newVoteExtension: event.params.newVoteExtension,
  };

  context.TransparentUpgradeableProxy_LateQuorumVoteExtensionSet.set(entity);
});

TransparentUpgradeableProxy.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.TransparentUpgradeableProxy_OwnershipTransferred.set(entity);
});

TransparentUpgradeableProxy.ProposalCanceled.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_ProposalCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
  };

  context.TransparentUpgradeableProxy_ProposalCanceled.set(entity);
});

TransparentUpgradeableProxy.ProposalCreated.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_ProposalCreated = {
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

  context.TransparentUpgradeableProxy_ProposalCreated.set(entity);
});

TransparentUpgradeableProxy.ProposalExecuted.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_ProposalExecuted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
  };

  context.TransparentUpgradeableProxy_ProposalExecuted.set(entity);
});

TransparentUpgradeableProxy.ProposalExtended.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_ProposalExtended = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
    extendedDeadline: event.params.extendedDeadline,
  };

  context.TransparentUpgradeableProxy_ProposalExtended.set(entity);
});

TransparentUpgradeableProxy.ProposalQueued.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_ProposalQueued = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
    eta: event.params.eta,
  };

  context.TransparentUpgradeableProxy_ProposalQueued.set(entity);
});

TransparentUpgradeableProxy.ProposalThresholdSet.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_ProposalThresholdSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldProposalThreshold: event.params.oldProposalThreshold,
    newProposalThreshold: event.params.newProposalThreshold,
  };

  context.TransparentUpgradeableProxy_ProposalThresholdSet.set(entity);
});

TransparentUpgradeableProxy.QuorumNumeratorUpdated.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_QuorumNumeratorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldQuorumNumerator: event.params.oldQuorumNumerator,
    newQuorumNumerator: event.params.newQuorumNumerator,
  };

  context.TransparentUpgradeableProxy_QuorumNumeratorUpdated.set(entity);
});

TransparentUpgradeableProxy.TimelockChange.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_TimelockChange = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldTimelock: event.params.oldTimelock,
    newTimelock: event.params.newTimelock,
  };

  context.TransparentUpgradeableProxy_TimelockChange.set(entity);
});

TransparentUpgradeableProxy.Upgraded.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.TransparentUpgradeableProxy_Upgraded.set(entity);
});

TransparentUpgradeableProxy.VoteCast.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_VoteCast = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    voter: event.params.voter,
    proposalId: event.params.proposalId,
    support: event.params.support,
    weight: event.params.weight,
    reason: event.params.reason,
  };

  context.TransparentUpgradeableProxy_VoteCast.set(entity);
});

TransparentUpgradeableProxy.VoteCastWithParams.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_VoteCastWithParams = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    voter: event.params.voter,
    proposalId: event.params.proposalId,
    support: event.params.support,
    weight: event.params.weight,
    reason: event.params.reason,
    params: event.params.params,
  };

  context.TransparentUpgradeableProxy_VoteCastWithParams.set(entity);
});

TransparentUpgradeableProxy.VotingDelaySet.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_VotingDelaySet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldVotingDelay: event.params.oldVotingDelay,
    newVotingDelay: event.params.newVotingDelay,
  };

  context.TransparentUpgradeableProxy_VotingDelaySet.set(entity);
});

TransparentUpgradeableProxy.VotingPeriodSet.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_VotingPeriodSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldVotingPeriod: event.params.oldVotingPeriod,
    newVotingPeriod: event.params.newVotingPeriod,
  };

  context.TransparentUpgradeableProxy_VotingPeriodSet.set(entity);
});
