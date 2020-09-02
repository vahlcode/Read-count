//Author : Valentine Elum
//For : Desyn Open Source
//Twitter : @VahlCode
//License : MIT License 

function readCount(string) {
    let words = string.replace(/(^\s*)|(\s*$)/gi, ""); //I'm excluding spaces at the start and end of the string with regular expression.
    words = words.replace(/[ ]{2,}/gi, " "); //I'm reducing multiple spaces to single spaces using regular expression.
    words = words.replace(/\n /, "\n"); //In case of new line with a start spacing, Im excluding it with regular expression.
    words = string.split(" ").length; //Now I'm getting the length of words in the finally returned string.

    let minutes = Math.floor(words / 120); //Getting the minutes it would take to read the string by the total number of words in the string.
    let seconds = Math.floor(words % 120 / (120 / 60)); //Getting the seconds it would take to read the string by the total number of words in the string.

    let estimated_time;
    
    if (1 <= minutes) {
        estimated_time = `${minutes} minute${(minutes == 1 ? '' : 's')}, ${seconds} ${second}${(seconds == 1 ? '' : 's')}`;
    } else {
        estimated_time = `${seconds} second${(seconds == 1 ? '' : 's')}`;
    }

    return estimated_time; 
}

export default readCount;