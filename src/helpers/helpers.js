function formatViews(views) {
    if (views >= 1000000) {
      const millions = Math.floor(views / 1000000);
      return millions + 'M';
    } else if (views >= 1000) {
      const thousands = Math.floor(views / 1000);
      return thousands + 'K';
    } else {
      return views.toLocaleString();
    }
  }
  

  function getTimeAgo(timestamp) {
    const currentTime = new Date();
    const givenTime = new Date(timestamp);
    const timeDiffInSeconds = Math.floor((currentTime - givenTime) / 1000);
  
    if (timeDiffInSeconds < 60) {
      return `${timeDiffInSeconds} seconds ago`;
    } else if (timeDiffInSeconds < 3600) {
      const minutes = Math.floor(timeDiffInSeconds / 60);
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (timeDiffInSeconds < 86400) {
      const hours = Math.floor(timeDiffInSeconds / 3600);
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (timeDiffInSeconds < 604800) {
      const days = Math.floor(timeDiffInSeconds / 86400);
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (timeDiffInSeconds < 2419200) {
      const weeks = Math.floor(timeDiffInSeconds / 604800);
      return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    } else if (timeDiffInSeconds < 29030400) {
      const months = Math.floor(timeDiffInSeconds / 2419200);
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
      const years = Math.floor(timeDiffInSeconds / 29030400);
      return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
  }

  function formatDuration(duration) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  
    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;
  
    if (hours === 0) {
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const formattedSeconds = seconds.toString().padStart(2, '0');
      return `${formattedMinutes}:${formattedSeconds}`;
    } else {
      const formattedHours = hours.toString().padStart(2, '0');
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const formattedSeconds = seconds.toString().padStart(2, '0');
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
  }
  

  export {formatViews, getTimeAgo, formatDuration}




  function formatNumber(number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(2) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(2) + 'K';
    } else {
      return number.toString();
    }
  }
  
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
 
  
export {formatNumber, generateRandomNumber}