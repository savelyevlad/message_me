class Message < ApplicationRecord
  validates :body, length: { minimum: 1, maximum: 500 }
  has_one :user
  belongs_to :user

  scope :custom_display, -> { order(:created_at).last(20) }
end
