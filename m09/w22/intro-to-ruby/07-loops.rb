# JS Loops
# for (i=0; i<10; i++)

# Ruby Loops

iterator_loop_count = 0

loop do
  puts "Current loop iteration: #{iterator_loop_count}"
  iterator_loop_count += 1
  break if iterator_loop_count > 10
end

another_iterator = 0;

while another_iterator < 5 do
  puts "Current WHILE iteration: #{another_iterator}"
  another_iterator += 2
end

# Array Loop
animals = ["Dog", "Cat", "Crocodile", "Bird", "Hamster"]

animals.each do |animal|
  puts "#{animal}"
end

animals.each_with_index do |animal, index|
  puts "#{index}-#{animal}"
end