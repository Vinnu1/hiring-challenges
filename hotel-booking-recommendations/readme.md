## How Hotel Recommendation System Works  
The logic is very basic. Every stat, i.e., visits, drafts and bookings have a score linked to them. Every time each activity happens
the score is added for that hotel. The hotels with top 3 scores will be displayed in recommendations.  
  
1. Visit - 1 Score
2. Draft - 2 Score
3. Booking - 3 Score

If a user visits twice, save draft once and book once, the hotel score added to existing score will be = 2x1 + 1x1 + 3x1 = 6.