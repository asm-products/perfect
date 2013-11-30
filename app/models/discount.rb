class Discount < ActiveRecord::Base
  attr_accessible :amount, :code, :dtype, :uses

  validates_uniqueness_of :code

  def calculate_discount_price(price)
    self.uses = self.uses - 1
    save
    if dtype == 'percent'
      final_price = (price * (1-(amount/100))).to_i
    end
    self.destroy if uses == 0
    final_price
  end
end
