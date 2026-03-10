## ADDED Requirements

### Requirement: CSV file upload interface
The system SHALL provide a file upload UI that allows the user to select or drag-and-drop a `.csv` file for ingestion.

#### Scenario: User uploads a valid CSV file
- **WHEN** the user selects or drops a `.csv` file onto the upload area
- **THEN** the system parses the file and transitions to the dashboard view with deal data loaded

#### Scenario: User uploads a non-CSV file
- **WHEN** the user selects a file that is not a `.csv`
- **THEN** the system SHALL display an error message and remain on the upload screen

### Requirement: CSV parsing and column mapping
The system SHALL parse the uploaded CSV using PapaParse and map the columns to the typed `Deal` model.

Required columns: `Task Name`, `Status`, `Date Created`, `Due Date`, `Start Date`, `Assignees`, `Priority`, `Tags`, `Task Content`, `Montant Deal`.

#### Scenario: All required columns present
- **WHEN** the CSV contains all required columns
- **THEN** each row SHALL be parsed into a valid `Deal` object with correct types

#### Scenario: Missing required column
- **WHEN** the CSV is missing one or more required columns
- **THEN** the system SHALL display a clear error listing the missing columns and SHALL NOT render the dashboard

#### Scenario: Deal amount parsing
- **WHEN** the `Montant Deal` column contains a numeric string (e.g., `"15000"`)
- **THEN** the value SHALL be stored as an integer in the `Deal.amount` field

#### Scenario: Tags parsing
- **WHEN** the `Tags` column contains pipe-separated values (e.g., `"SaaS|B2B"`)
- **THEN** the value SHALL be split into an array of strings (e.g., `["SaaS", "B2B"]`)

### Requirement: Upload a new CSV to replace current data
The system SHALL allow the user to upload a new CSV file at any time to replace the currently loaded data.

#### Scenario: User uploads a replacement CSV
- **WHEN** a dashboard is already displayed and the user clicks the "Upload new file" button
- **THEN** the system SHALL reset the state and show the upload screen again
