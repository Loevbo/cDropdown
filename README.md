
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

 * [jQuery array]() - Example by only using an array

### Lets break it down a bit

Explain what these tests test and why

```
Give an example
```

### And coding style tests

```
obj: [
      {
        "Application": {
            "Id": "Application",
            "Name": "Application",
            "Primary": true,
            "Class": "form-control",
            "Child": "Language",
            "Sort": true,
            "Required": true,
            "option": [{
                "val": "CPreQVa",
                "text": "What kind of application do you wish to make",
                "preSelect": true
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

 * V 1.000 - 

## What to come

 * Option to allow multiple selects of a dropdown.

## Authors

* **Carsten Løvbo** - *Initial work* - [Loevbo](https://github.com/Loevbo)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


