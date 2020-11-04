---
title: "Omnibase"
date: 2020-11-04
type: "project"
---

{{< figure src="/images/omnibase.png" height="auto" width="400">}}


Due to the COVID-19, all of us were restricted to our homes. So, testing the algorithms on an actual robot was close to 
impossible. That is why, I started developing this simulator for one of the projects I worked on during my undergraduate 
years, Trotbot(don't get fooled by the name).  

Trotbot is a 4 wheeled, omniwheel drive robot with a 2-D lidar for obstacle detection. The omnibase is a replica of 
Trotbot. Basic sensor like a 2-D lidar has plugin in the Gazebo physics simulator which was used on the robot in the simulator.
The model of the robot was made in solidworks. 

The robot behaves exactly like an omniwheeled robot. The controller of the robot converts the velocity published on 
`/cmd_vel` to appropriate wheel velocities. 

For more detailed documentation click [here](https://erc-bpgc.github.io/omnibase/).

Source Code can be viewed [here](https://github.com/ERC-BPGC/omnibase).

ROS world lightning talk submission:

{{< youtube txHWgvobiOY >}}