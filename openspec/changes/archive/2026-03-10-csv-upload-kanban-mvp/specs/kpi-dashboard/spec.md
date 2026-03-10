## ADDED Requirements

### Requirement: Six KPI cards displayed at page top
The system SHALL display 6 KPI cards above the Kanban board, always visible, computed from the loaded deal data.

#### Scenario: KPI cards rendered after CSV upload
- **WHEN** the user uploads a valid CSV
- **THEN** all 6 KPI cards SHALL be visible at the top of the dashboard

### Requirement: CA signé KPI
The system SHALL display the total deal amount for deals with status `gagné - en cours`.

#### Scenario: CA signé computed correctly
- **WHEN** 2 deals have status `gagné - en cours` with amounts 20 000 € and 30 000 €
- **THEN** the "CA signé" KPI SHALL display `50 000 €`

### Requirement: CA en négociation KPI
The system SHALL display the total deal amount for deals with status `négociation`.

#### Scenario: CA en négociation computed correctly
- **WHEN** deals with status `négociation` total 80 000 €
- **THEN** the "CA en négociation" KPI SHALL display `80 000 €`

### Requirement: CA à relancer KPI
The system SHALL display the total deal amount for deals with status `à relancer`.

#### Scenario: CA à relancer computed correctly
- **WHEN** deals with status `à relancer` total 15 000 €
- **THEN** the "CA à relancer" KPI SHALL display `15 000 €`

### Requirement: Valeur moyenne d'un deal KPI
The system SHALL display the average deal amount across all deals, regardless of status.

#### Scenario: Average deal value computed correctly
- **WHEN** there are 4 deals with amounts 10 000, 20 000, 30 000, and 40 000 €
- **THEN** the "Valeur moyenne d'un deal" KPI SHALL display `25 000 €`

### Requirement: Nombre de deals actifs KPI
The system SHALL display the count of all deals that are not lost (all statuses included in the pipeline).

#### Scenario: Active deal count
- **WHEN** there are 12 deals in the pipeline across all statuses
- **THEN** the "Nombre de deals actifs" KPI SHALL display `12`

### Requirement: CA total du pipeline KPI
The system SHALL display the total deal amount across all deals in the pipeline.

#### Scenario: Total pipeline value computed correctly
- **WHEN** all deals sum to 250 000 €
- **THEN** the "CA total du pipeline" KPI SHALL display `250 000 €`
