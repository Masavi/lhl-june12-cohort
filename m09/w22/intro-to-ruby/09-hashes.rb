# OBJECTS IN JS
# const student = {
#   name: "Mark",
#   cohort: "June 12th, 2023"
# }

student1 = {
  "name" => "Mark",
  "cohort" => "June 12"
}

puts student1["name"] # OK
puts student1[:name] # Not ok...

student2 = {
  :name => "Mark",
  :cohort => "June 12"
}

puts student2["name"] # Not ok...
puts student2[:name] # OK

student3 = {
  name: "Mark",
  cohort: "June 12"
}

puts student3["name"] # Not ok...
puts student3[:name] # OK