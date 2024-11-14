# FinalPlayoApppln
This applications involves 
  1. AuthService - To authenticate and authorize users
  2. OwnerService - To CRUD on owner detaisl and owner able to perform CRUD on facilities
  3. UserService - To CRUD on user of appln and perform CRUD on groups created by the user
  4. BookingService - To perform booking operation based on the faciltiy created by the owner and group formed by the user
     
In AuthService -
  Followed 2 ways of recognizing user -

    1. JWT token authentication
    2. OAuth2.0 based authentication
    
  This signs in the user to our application and identifies them as a valid user to the web application
  
In OwnerSerivce - 

  1. Owner can CRUD on faciltiy created by them 
  2. Owner can CRUD their profile

In UserService -

  1. User can perform CRUD on the profile created by them
  2. User can perform CRUD on group created by them and send follow request to other users to get added to the group

  For the follow request and acceptence used redis as a medium of sending and acceoting requests

In bookingService -

  1. Users can book based on the faciltity and group chosen within 7 days of time from today.
  2. Once booking done a mail wil be sent as a reminder with SMTP protocol and Gmail service embedded for user experience

In above most areas implementing throttling to limit the number of request to reduce the workload on APIs
