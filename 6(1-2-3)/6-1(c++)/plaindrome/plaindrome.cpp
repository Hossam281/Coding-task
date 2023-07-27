#include <iostream>
#include <string>


//in order to run this code please copy and paste it in any c++ IDE

using namespace std;

//this function will return true if the word is palindrome otherwise it will return false
bool isPalindrome(const string& word) {
    int start = 0;
    int end = word.length() - 1;

    while (start < end) {
        if (tolower(word[start]) != tolower(word[end]))
            return false;

        start++;
        end--;
    }

    return true;
}


// this function will reverese the word in case it isnt palindrome

void reverseIfNotPalindrome() {
    string user_input;
    cout << "Enter a word: ";
    cin >> user_input;

    if (isPalindrome(user_input)) {
        cout << "The word is a palindrome!" << endl;
    }
    else {
        string reversed;
        for (int i = user_input.length() - 1; i >= 0; i--) {
            reversed += user_input[i];
        }
        cout << "Not palindrom .Reversed: " << reversed << endl;
    }
}

int main() {
    reverseIfNotPalindrome();
    return 0;
}
