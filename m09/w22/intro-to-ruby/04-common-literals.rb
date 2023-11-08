=begin

  Primitive Values in JavaScript
  - String
  - Symbol
  - Boolean
  - Number (NaN)
  - Null
  - Undefined

  Common Literals in Ruby
  - String
  - Boolean (TrueClass, FalseClass)
  - Symbol (MUCH more used in ruby than in js!)
  - Number
    - Integer (5, 10, 210, -400)
    - Floating (3.21, 5.12, 3.1416)
  - nil

=end

puts "TRUE is..."
puts true.class

puts "FALSE is..."
puts false.class
puts false.inspect

puts "NIL is..."
puts nil.class

puts "Symbols look like this:"
puts :this_is_my_symbol
puts :this_is_my_symbol.class

puts -3.146.class
puts -3.class

# EVERYTHING in Ruby is a class. We can inspect the class methods:
# puts String.methods