This will have notes on how the script is written, why things were done a certain way and how to manage and maintain it

Why its built in HTML:

The first question you likely have looking at this Github is why the hell has he written it in HTMl. To put a long story short, i spent 3 days of my life messing around in word trying to build a compatible template that would allow the population of data from Power apps with the addition of dynamic elements powered by SAMSync only to find out it wasnt possible. As i had already planned on completely redesigning the documents and combining them into one single master template with dynamic sections this was the next best option.

Pros:

-Style, formatting and images are locked
-Consistant document creation

Cons:

-You need to have some understanding of HTML to be able to edit the template
-Files are saved directly to PDF rather than a word document, making additional editing difficult.


Why the images are code not image files:

Another issue i ran into is if we stored the images on sharepoint, even as a open to everyone link the HTML running within power automate cannnot access them. As a result i had to encode each image in base64 format. In the Git you will find the two images used at this current point in time, should you need to replace or add them again you can simply put them in an online converter like: https://base64.guru/converter/encode/image/png which will provide you with the base64 needed.

How to add new fields in 

How to manage data populating from SAMSync