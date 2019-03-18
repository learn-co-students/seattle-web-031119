# Object Relations Practice: Film Festival Edition


## Notes

Your goal is to build out all of the methods listed in the deliverables.

We've provided you with a console that you can use to test your code. To enter a console session, run `ruby tools/console.rb` from the command line. You'll be able to test out the methods that you write here. Take a look at that file to see how you can pre-define variables and create object instances, rather than manually doing it in every single console session.

**Remember!** This is a code challenge without tests. You cannot run `rspec` you cannot run `learn`. You'll need to create your own sample instances for testing purposes. Make sure your associations and methods work in the console before submitting.

## Deliverables

### Basic Class Methods and Properties

#### Build the following instance and class methods for `Film`
- `Film` should initialize with a name and a setting
- `Film` should respond to `Film#name` and `Film#setting`
- `Film` should be able to change its name with an accessor, but not its setting
- `Film` should have a method `Film.all` that returns all the instances of `Film`
- `Film` should have a method `Film.all_introductions` that puts out a message of `"Welcome, this is {insert film name here}, set in {insert setting here}"` for each film

#### Build the following instance and class methods for `Festival`
- `Festival` should initialize with a title and location
- `Festival` should have a method `Festival.all` method which returns all the instances of `Festival`

---

### Associations and Aggregate Methods
#### `Screening`
- `Screening` should initialize with a date (string), film, and festival
- `Screening` should have methods `Screening#film` and `Screening#festival` that return the `Film` instance and `Festival` instance associated to the screening
- `Screening` should have a `Screening.all` method which returns all the instances of `Screening`
- `Screening` should have a method `Screening#hometown_setting?` that returns true if the film is being screened in the same place where it is set.  For example, when _If Beale Street Could Talk_ (set in New York) was screened at the New York Film Festival, that was a "hometown setting".  When _The Favourite_ (set in England) was screened at the New York Film Festival, that was not a hometown setting.

#### `Film`
- `Film` should have a method `Film.most_festivals` that returns the film (object) that has been screened at the most festivals
- `Film` should have a method `Film#screen_at_festival` that takes a festival (object) and date (string) as arguments and associates the film to that festival
- `Film` should have a method `Film#screenings` should return an array of all that film's screenings
- `Film` should have a method `Film#festivals` that returns an array of all the festivals the film has been screened in

#### `Festival`
- `Festival` should have a method `Festival#screenings` that lists all the screenings that have ever been shown in that festival
- `Festival` should have a method `Festival#films` that lists all the films that have ever been screened in that festival
