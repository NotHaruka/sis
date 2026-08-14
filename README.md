# Simple C# Student Information System

## Technology
- C# / .NET 8
- Windows Forms
- SQLite
- Visual Studio

## Features
1. Login
2. Dashboard
3. Add student
4. Edit student
5. Delete student
6. Search students
7. Student count

## Default login
Username: admin
Password: admin123

## How to run
1. Install Visual Studio 2022 with the .NET desktop development workload.
2. Open `StudentInformationSystem.csproj`.
3. Restore NuGet packages.
4. Add the SQLite package:
   `System.Data.SQLite.Core`
5. Build and run.

The database file `sis.db` is created automatically beside the application.

## Simple defense explanation
The system uses three main layers:
- Forms: user interface.
- Database class: handles SQL operations.
- SQLite database: stores users and student records.

The user logs in first. After successful authentication, the dashboard shows the student count. The Students screen performs CRUD operations: Create, Read, Update, and Delete. Search uses a parameterized SQL query to filter student records.
