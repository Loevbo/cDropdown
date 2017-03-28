
# cDropDown
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### What do I need?

 * [jQuery](https://code.jquery.com/jquery-1.10.2.js) - all you need to make this work is jQuery-1.10.2 or a newer version


### Installing

This script is very easy to use and even easier to install.

```
<select id="cDropdown"></select>

<script src="/jquery-1.10.2.js"></script>
<script src="/cDropdown.js"></script>
<script>
  $('#cDropdown').cDropdown({
    obj: []
  });
</script>
```
That is it !! 

### Examples of the code with different type of code languages

 * [jQuery array](https://github.com/Loevbo/cDropdown/tree/master/Examples/Jquery_Array) - Example by only using an array

### Lets break it down a bit

```
obj: [
      {
        "Application": {                                                 // Your dropdown object
            "Id": "Application",                                         // The ID of the dropdown
            "Name": "Application",                                       // The Name of the dropdown   / Optional
            "Primary": true,                                             // The Primary dropdown, aka the one a user should see first
            "Class": "form-control",                                     // Add classes to your dropdown   / Optional
            "Child": "Language",                                         // What dropdwown shall be shown, when we select something from this.
            "Sort": true,                                                // Will sort the options alphabetically   / Optional
            "Required": true,                                            // Add the required option to the dropdown   / Optional
            "option": [{                                                 // An array of options
                "val": "CPreQVa",                                        // The value of the option
                "text": "What kind of application do you wish to make",  // The text of the option
                "preSelect": true                                        // If preSelect is true, it will be our preshown option of the dropdown   / Optional
            }, {
                "val": "Web_app",
                "text": "Web application"
            }, {
                "val": "Mob_app",
                "text": "Mobile application"
            }]
        }, "Language": {
            "Id": "Language",
            "Name": "Language",
            "Class": "form-control",
            "Sort": true,
            "option": [{
                "val": "CPreQVa",
                "text": "Select the language you wish to create your application in",
                "preSelect": true
            }, {
                "val": "MVC",
                "text": "MVC",
                "trigger": "Web_app"
            }, {
                "val": "C#",
                "text": "C#",
                "trigger": "Web_app"
            }, {
                "val": "PHP",
                "text": "PHP",
                "trigger": "Web_app,Mob_app"
            }, {
                "val": "js",
                "text": "JavaScript",
                "trigger": "Mob_app"
            }]
        }
    }
]
```


## Versioning

 * V 1.000

## What to come

 * Option to allow multiple selects of a dropdown.
 * Adding example for: MVC, PHP

## Authors

* **Carsten Løvbo** - [Loevbo](https://github.com/Loevbo)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Loevbo/cDropdown/blob/master/LICENSE) file for details


