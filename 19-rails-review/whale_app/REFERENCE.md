STRONG PARAMS :   params.require(:merby).permit(:name, :species, :kill_count, :length)

///MERBY CONTROLLER
class MerbiesController < ApplicationController

  def index
    @merbies = Merby.all
  end

  # get '/merby', to: 'merby#index'
  def show
    # byebug
    @merby = Merby.find(params[:id])
  end

  def new
  end

  def create
    byebug
    Merby.create(merby_params)
    # Merby.create(name: params[:name], species: params[:species], kill_count: params[:kill_count], length: params[:length])
  end

  private
  def merby_params
    params.require(:merby).permit(:name, :species, :kill_count, :length)
  end
end


//MERBY VIEW INDEX
<h1>Merby lives here</h1>
<ul>
  <% @merbies.each do |merby| %>
    <h4>Species :</h4>
    <%= merby.species %><br>
    <h4>Kill Count :</h4>
    <%= merby.kill_count %> <br><br>
    <h4>Length :</h4>
    <%= merby.length%><br>
    <h4>Alive?</h4>
    <%= merby.alive%><br>
  <% end %>
</ul>


//MERBY VIEW NEW
<h1>Make a burger</h1>
<%= form_tag('/merbies') do %>
<label for="name"> Name</label>
<%= text_field_tag 'merby[:name]' %>
<label for="species"> Species</label>
<%= text_field_tag 'merby[:species]' %>
<label for="kill_count"> Kill Count</label>
<%= number_field_tag 'merby[:kill_count]' %>
<label for="length">Length </label>
<%= number_field_tag 'merby[:length]' %>
<%= submit_tag "Create Whale"%>
<% end %>


//MERBY SHOW
<h4>Here is a Merby Specific Whale</h4>
<ul>
    <h6>Name :</h6>
    <%= @merby.name %><br>
    <h6>Species :</h6>
    <%= @merby.species %><br>
    <h6>Kill Count :</h6>
    <%= @merby.kill_count %> <br><br>
    <h6>Length :</h6>
    <%= @merby.length%><br>
    <h6>Alive?</h6>
    <%= @merby.alive%><br>
</ul>

//ROUTES
Rails.application.routes.draw do
  # resources :sailors
  # resources :merby

  resources :sailors, only: [:index]
  resources :merbies, only: [:index, :show, :new, :create]

# old way
# get '/merbies' do
# erb :'/merbies/index'
# end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end






<%= form_tag('/merbies') do %>
<label for="name"> Name</label>
<%= text_field_tag 'merby[:name]' %>
<label for="species"> Species</label>
<%= text_field_tag 'merby[:species]' %>
<label for="kill_count"> Kill Count</label>
<%= number_field_tag 'merby[:kill_count]' %>
<label for="length">Length </label>
<%= number_field_tag 'merby[:length]' %>
<%= submit_tag "Create Whale"%>
<% end %>





<%= form_for(@merby) do |f| %>
  <%= f.label :name %>
  <%= f.text_field   :name %>
  <%= f.label :species %>
  <%= f.text_field   :species %>
  <%= f.label :kill_count %>
  <%= f.number_field :kill_count %>
  <%= f.label :length %>
  <%= f.number_field :length %>
  <%= f.label, :alive %>
  <%= f.radio_button :alive, true %>
  <%= f.radio_button :alive, false %>
<% end %>


<%= form_for(@merby) do |f| %>
  <%= f.label :name %>
  <%= f.text_field   :name %>
  <%= f.label :species %>
  <%= f.text_field   :species %>
  <%= f.label :kill_count %>
  <%= f.number_field :kill_count %>
  <%= f.label :length %>
  <%= f.number_field :length %>
  <%= f.radio_button :alive, true  %>
  <%= f.radio_button :alive, false%>
  <%= f.submit %>
<% end %>



<ul>
    <h6>Name :</h6>
    <%= @merby.name %><br>
    <h6>Species :</h6>
    <%= @merby.species %><br>
    <h6>Kill Count :</h6>
    <%= @merby.kill_count %> <br><br>
    <h6>Length :</h6>
    <%= @merby.length%><br>
    <h6>Alive?</h6>
    <%= @merby.alive%><br>
</ul>


<ul>
  <% @merbies.each do |merby| %>
    <h4>Species :</h4>
    <%= merby.species %><br>
    <h4>Kill Count :</h4>
    <%= merby.kill_count %> <br><br>
    <h4>Length :</h4>
    <%= merby.length%><br>
    <h4>Alive?</h4>
    <%= merby.alive%><br>
  <% end %>
</ul>



# get '/merby', to: 'merby#index'
def show
  # byebug
  @merby = Merby.find(params[:id])
end

def new
  @merby = Merby.new
end

def create
  # byebug
  Merby.create(merby_params)
  # byebug
  redirect_to merbies_path
  # Merby.create(name: params[:name], species: params[:species], kill_count: params[:kill_count], length: params[:length])
end

private
def merby_params
  params.require(:merby).permit(:name, :species, :kill_count, :length)
end
end
