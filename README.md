📄 Document Generation Template (HTML-Based)
This repository contains the HTML template and supporting notes for generating dynamic documents via Power Apps, Power Automate, and SAMSync.

It includes:

Implementation details
Design decisions and rationale
Guidance for ongoing maintenance and updates


❓ Why is this built in HTML?
The first question you’ll probably ask is:

“Why on earth is this written in HTML?”

Short answer: limitations with Word.
After spending ~3 days attempting to build a Word template that could:

Accept Power Apps data
Support dynamic sections from SAMSync
Remain stable and maintain formatting

…it became clear this wasn’t feasible with Word.
Since the goal was already to:

Redesign the documents completely
Consolidate everything into a single master template
Support dynamic sections

HTML became the most practical and reliable alternative.

✅ Pros

Consistent output – Documents are generated in a predictable format every time
Locked styling – Prevents layout breakage and formatting drift
Full control – Easier to handle dynamic sections and structured layouts
Better compatibility with Power Automate rendering


⚠️ Cons

Requires basic HTML knowledge to make changes
Output is generated as PDF only

No native Word document output
Post-generation editing is more difficult




🖼️ Why are images stored as code (Base64)?
Another limitation encountered:

Images hosted on SharePoint — even with open/public links —
cannot be accessed by the HTML renderer inside Power Automate

✅ Solution
Images are embedded directly using Base64 encoding
🧠 How it works

Each image is converted into a Base64 string
That string is embedded directly into the HTML
This removes any dependency on external file access

🔧 How to update or add images

Take your image file (PNG/JPG)
Convert it using an online tool, e.g.
👉 Base64 Image Encoder
Replace or insert the generated Base64 string in the HTML

You’ll find the currently used images already stored in this repository for reference.

➕ Adding New Fields
(To be completed — suggested structure below)
When adding new data fields:

Update the HTML template with the required placeholders
Ensure field names align with:

Power Automate outputs
SAMSync mappings


Validate:

Null handling
Formatting consistency
Placement within dynamic sections




🔄 Managing Data from SAMSync
(To be completed — suggested structure below)
When working with SAMSync data:

Ensure field mappings are correctly defined
Validate how dynamic sections are populated
Test with:

Full data sets
Partial / missing data scenarios




🧩 Maintenance Notes

Keep HTML structure clean and modular where possible
Reuse components/sections to avoid duplication
Test after each change (especially layout or images)
Be mindful that all styling must work in a Power Automate → PDF context

