## ADDED Requirements

### Requirement: Five-column Kanban layout
The system SHALL render a Kanban board with exactly 5 columns in the following order: `Prospect`, `Qualifié`, `Négociation`, `À relancer`, `Gagné`.

#### Scenario: Columns rendered in correct order
- **WHEN** the user accesses the dashboard after CSV upload
- **THEN** the 5 columns SHALL appear left-to-right in the order: Prospect → Qualifié → Négociation → À relancer → Gagné

#### Scenario: Deal routed to correct column
- **WHEN** a deal has `status = "négociation"`
- **THEN** its card SHALL appear in the `Négociation` column

### Requirement: Deal card content
Each deal card SHALL display: contact name and company (from `Task Name`), deal amount in euros, priority badge, and due date.

#### Scenario: Card displays all fields
- **WHEN** a deal card is rendered
- **THEN** it SHALL show the task name, formatted amount (e.g., `15 000 €`), priority badge (High / Medium / Low), and due date

#### Scenario: Missing due date
- **WHEN** a deal has no due date
- **THEN** the due date field SHALL display an empty or placeholder state (no crash)

### Requirement: Column total in header
Each column header SHALL display the cumulative sum of all deal amounts in that column.

#### Scenario: Column total computed correctly
- **WHEN** a column contains 3 deals with amounts 10 000, 5 000, and 2 000 €
- **THEN** the column header SHALL display `17 000 €`

#### Scenario: Empty column
- **WHEN** a column has no deals
- **THEN** the column header SHALL display `0 €`
