class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :number_1
      t.integer :number_2
      t.string :operator

      t.timestamps null: false
    end
  end
end
