# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



100.times do |i|
  numbers_array = [rand(10), rand(10)].sort
  operator_array = ['-', '+', '*'].shuffle
  Question.create({
    number_1: numbers_array[1],
    number_2: numbers_array[0],
    operator: operator_array[0]
  })
end
