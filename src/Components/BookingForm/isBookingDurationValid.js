const isBookingDurationValid = (start_date, end_date) => {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);
  
    const duration = endDate - startDate;
  
    const minDuration = 15 * 60 * 1000;
  
    const maxDuration = 10 * 60 * 60 * 1000;
  
    // 15 mins - 10 hours
    return duration >= minDuration && duration <= maxDuration;
  };
  
  
module.exports = { isBookingDurationValid };