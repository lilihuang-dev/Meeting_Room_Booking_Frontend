const convertTimeformat = (inputTimestamp) => {
    const dateTime = inputTimestamp.split("T")
    const date = dateTime[0];
    const time = dateTime[1].split(".")[0].slice(0,-3);
    const formattedDateTime = `${date} ${time}`;
    
    return formattedDateTime
  }

  export default convertTimeformat;