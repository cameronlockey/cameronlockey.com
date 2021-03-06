# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|

  config.vm.box       = "ubuntu/xenial64"
  config.vm.hostname  = "cameronlockey.local"

  # config.vm.provider :virtualbox do |v|
  #   v.cpus = '2'
  #   v.memory = '4096'
  #   v.customize [ "guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-set-threshold", 1000 ]
  # end

  # This should be something like 192.168.33.95, but unique to this app if you have multiple VMs running.
  config.vm.network :private_network, ip: "192.168.22.98"

  config.vm.network :forwarded_port, guest: 3001, host: 3001    # rails
  config.vm.network :forwarded_port, guest: 9292, host: 9292    # rack
  config.vm.network :forwarded_port, guest: 4567, host: 4567    # sinatra
  config.vm.network :forwarded_port, guest: 1080, host: 1080    # mailcatcher
  config.vm.network :forwarded_port, guest: 8888, host: 8888    # jasmine
  config.vm.network :forwarded_port, guest: 3306, host: 3307    # mysql
  config.vm.network :forwarded_port, guest: 1234, host: 1234    # node
  config.vm.network :forwarded_port, guest: 5432, host: 5432    # postgresql
  config.vm.network :forwarded_port, guest: 6379, host: 6379    # redis
  config.vm.network :forwarded_port, guest: 9200, host: 9200    # elasticsearch
  config.vm.network :forwarded_port, guest: 27017, host: 27017  # mongodb
  config.vm.network :forwarded_port, guest: 80, host: 8080      # apache/nginx

  config.vm.provision :shell, path: 'bootstrap.sh', keep_color: true, privileged: false

  config.vm.provider 'virtualbox' do |v|
    v.memory = 2048
    v.cpus = 2
  end

  config.vm.synced_folder ".", "/vagrant", type: "nfs", create: true

  # config.push.define "heroku" do |push|
  #   push.app = "my_application"
  # end
end
