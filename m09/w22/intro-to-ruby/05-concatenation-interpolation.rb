# Concatenation: adding strings together.
# If you have different data types, you'll need to convert/cast them into string
welcome_text = "Hello and welcome, "
my_number = 100.to_s

result = welcome_text + my_number

puts result

# Interpolation: showing the value of a variable/constant within a string
puts "This is the welcome string: #{result}"
puts "This is a ruby expression: #{3+6}"