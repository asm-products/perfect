class Address < ActiveRecord::Base
  attr_accessible :city, :line1, :line2, :lob_id, :phone, :subregion, :country, :name, :zip

  def for_lob
    {
      name: name,
      address_line1: line1,
      address_line2: line2,
      city: city,
      state: subregion,
      country: country,
      zip: zip
    }
  end

  has_many :postcards
  # "name"=>"Zachary Feldman", "address_line1"=>"191 Humboldt St, Apt 5", "address_line2"=>"", "city"=>"Brooklyn", "state"=>"NY", "country"=>"US", "zip"=>"11206"
end
