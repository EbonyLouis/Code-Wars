// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
solution = (str,ending) => ending === str.substr(str.length - ending.length);
