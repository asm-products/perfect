require 'spec_helper'

describe Discount, type: :model do
  
  describe "#calculate_discount_price" do

    let(:discount){ Discount.create(amount: 25, code: '25OFF', dtype: 'percent', uses: 1)}

    it 'should return the price minus a percent discount if one exists' do
      price = discount.calculate_discount_price(200)
      expect(price).to eq(150)
    end

    it "should destroy the discount if it's the last remaining use" do
      price = discount.calculate_discount_price(200)
      expect{discount.reload}.to raise_error(ActiveRecord::RecordNotFound)
    end


  end


end
