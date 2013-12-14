class Country < ActiveRecord::Base
  attr_accessible :alpha_2_code, :official_name

  has_many :subregions
end
