# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

puts "Starting seeding process..."

5.times do
  Registry.create(name: Faker::Creature::Cat.registry)
end

puts "-> Registries seeded"

all_registries = Registry.all 

25.times do
  Cat.create(
    name: Faker::Creature::Cat.name,
    breed: Faker::Creature::Cat.breed,
    registry: all_registries.sample
  )
end

puts "-> Cats seeded"

puts "Seeding finished!"