class Test < ApplicationRecord
  validates :student_first_name, presence: true
  validates :student_last_name,  presence: true
  validates :grade , numericality: {only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 100}
  validates :minutes_taken , numericality: {only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 60}
  # validates :games_played, numericality: { only_integer: true }
end
