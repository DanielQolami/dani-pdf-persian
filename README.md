# Dani PDF (non-english languages)

The problem that pdf maker libraries have is that they only write pdf with ASCII charachters.

to use languages like PERSIAN, japanese or ... you must do these steps:
1) download font that supports your target language (I have used vazir font)
2) convert the "ttf" file to "js" file. using [this link](https://rawgit.com/MrRio/jsPDF/master/fontconverter/fontconverter.html)
3) use it inside jsPDF
4) create your PDF
