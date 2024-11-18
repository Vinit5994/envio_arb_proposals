import assert from "assert";
import { 
  TestHelpers,
  L2ArbitrumGovernor_Initialized
} from "generated";
const { MockDb, L2ArbitrumGovernor } = TestHelpers;

describe("L2ArbitrumGovernor contract Initialized event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for L2ArbitrumGovernor contract Initialized event
  const event = L2ArbitrumGovernor.Initialized.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("L2ArbitrumGovernor_Initialized is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await L2ArbitrumGovernor.Initialized.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualL2ArbitrumGovernorInitialized = mockDbUpdated.entities.L2ArbitrumGovernor_Initialized.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedL2ArbitrumGovernorInitialized: L2ArbitrumGovernor_Initialized = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      version: event.params.version,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualL2ArbitrumGovernorInitialized, expectedL2ArbitrumGovernorInitialized, "Actual L2ArbitrumGovernorInitialized should be the same as the expectedL2ArbitrumGovernorInitialized");
  });
});
