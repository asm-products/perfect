class Subregion < ActiveRecord::Base
  attr_accessible :alpha_2_code, :country_id, :official_name

  belongs_to :country
  has_many :cities
end
