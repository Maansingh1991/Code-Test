# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here


## Assumpations
1) We can create mapping table for saving facility agent relationship
2) All functionality will behave as same as before only custom id is added as functionality for agent.


## Ticket 1
Title :- Create custom id's for Agents in facility
Description:- Create custom id for each agent inserted in facility-agent mapping table.
Format of id will be brokendown in 3 parts (<uniqueID>-<timestamp in milliseconds>-<Facility Name>)

Implementation:-

1) Create utility function for generating UUID. It should accept parameter as integer for definning length of uuid.
2) Create utility function for returning milliseconds.Argument should be a valid date format.
3) create a modal function for Facility-Agent model class and use above functions while inserting any new record in facility's table.

Acceptance Criteria:-

1) <UniqueId> should be in alphanumeric format.
2) Length of <UniqueId> should be 4 alphanumeric character.
2) Timestamp should be numeric format and in milliseconds ex:- 1663511578077  .
3) For timestamp should be calculated on the basis created data in DB.
4) in case of last name first 3 character should be used.
5) To handle edge cases we need to make sure that Agent id should be unique for Every Agent.
6) Seperator (-) should be used in seperating unique id,timestanp and lastname.

Estimates:- 5 story points

## Ticket 2
Title :- Update getShiftsByFacility function
Description:- Since we have custom agent id facility-agent mapping table we need to getShiftsByFacility so that when facility id passed it should return custom id of agent from facility-agent mapping table with shift.

Acceptance criteria:-
1) It should not break current functionality only instead of Agent db id custom id from mapping table be returned.
2) All agent id should be unique for agents.
3) All unit and integration test cases should be updated.

Estimates:- 7 story points

## Ticket 3
Title:- Update generateReport function 
Description :- Reports generated should inclide custom ID for agents with their shifts.

Acceptence criteria:-
1) It should not impact current functionality.
2) Instead of db id for agents custom id of facilities for agent should be shown in pdf.
3) Update necessary unit and integration test cases.

Estimates:- 3 story points