class Message < ApplicationRecord
  validates :body, length: { minimum: 1, maximum: 500 }
  has_one :user
end
