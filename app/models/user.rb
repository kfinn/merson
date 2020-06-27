class User < ApplicationRecord
  devise :confirmable, :database_authenticatable, :lockable, :recoverable, :registerable, :rememberable, :trackable, :validatable

  has_many :players
  has_many :games, through: :players
  has_many :city_regions, through: :games
  has_many :field_regions, through: :games
  has_many :road_segments, through: :games
end
