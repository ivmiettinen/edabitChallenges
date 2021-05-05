// POV: You are in an exam and time has just run out. While
// the teacher's back is turned, you hastily take the
// opportunity to finish scribbling down the last few
// words of the conclusion.

// For this challenge, it takes 0.5 seconds to write a
// character (not including spaces). Given the full
// sentence and the unfinished sentence as inputs,
// return the time it takes to finish writing in seconds.

// Notes
// The unfinished sentence is always found at the start
// of a complete sentence.

const timeToFinish = (full, part) =>
    (full.replace(/ /g, '').length - part.replace(/ /g, '').length) / 2

timeToFinish(
    'And so brings my conclusion to its conclusion.',
    'And so brings my conclusion to its conclus'
)
timeToFinish(
    "As a result, my point is still valid.",
    "As a result, my"
  )
timeToFinish(
    "Thank you for reading my essay.",
    "T"
  )