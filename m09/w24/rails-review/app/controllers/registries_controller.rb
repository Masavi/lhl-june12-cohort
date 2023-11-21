class RegistriesController < ApplicationController
  def index
    @all_registries = Registry.all
  end
end
