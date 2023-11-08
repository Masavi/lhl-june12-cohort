# in JavaScript we have "==" and "==="
# true == 1

p "-- BOOLEANS --"
p true == true
p true == false
p "true" == true

p "-- NUMBERS --"
p 3 == 3
p "3" == 3
p 3 == 3.00
p 3 == 3.01

p "-- OPERATORS --"
p 3 / 5

p "-- INPUT FROM THE USER --"
user_input = gets.chomp.to_i
p user_input

p "-- IF STATEMENTS!! --"

if user_input > 10
  puts "number is bigger than 10!"
elsif user_input < 10
  puts "number is lower than 10... or you didn't add a number"
else
  puts "number is 10!"
end


snowing = false;
puts "Put away the shovel and enjoy the sun!" unless snowing;

puts "This is a huge number!!" if user_input > 100

p "-- SWITCH CASES --"

message_type = "goodbye"

case message_type
  when "hello"
    puts "Greetings!"
  when "goodbye"
    puts "See you later!"
  else
    puts "Invalid message type :("
end 