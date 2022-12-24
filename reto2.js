function countHours(year, holidays) {
 
    let totalExtraHoursToCompensate = 0;
  
    holidays.map((simpleDay) => {
      const date = new Date(`${year}/${simpleDay}`);
      if (date !== null && date.getDay() !== 0 && date.getDay() !== 6) {
        totalExtraHoursToCompensate += 2;
      }
  
      return null;
    });
  
    return totalExtraHoursToCompensate;
  }
  